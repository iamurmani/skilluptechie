import { Box, TextField } from "@mui/material";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../controllers/services/adminAuth.service";
import { useAdminAuth } from "../../context/AdminAuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInterceptors";

const schema = yup.object({
  email: yup.string().email().required("Please enter email"),
  password: yup.string().required("Please enter password"),
});

const AdminLogin = () => {
  const { setAdminAuth } = useAdminAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginErr, setLoginErr] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/admin/dashboard/overview";

  useEffect(() => {
    axiosInstance
      .get("comments?postId=1")
      .then((response) => {})
      .catch((error) => {});
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onLogin = async (data) => {
    let result = await login(data.email, data.password);
    if (result.statusCode === 200 && result.result?.user) {
      setAdminAuth({ user: result.result });
      navigate(from, { replace: true });
    } else {
      if (result.errorMessage === "Error: Password dose not match") {
        setLoginErr("Invalid Credentials");
      } else {
        setLoginErr(result.errorMessage);
      }
    }
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex mt-20 gap-4 flex-col items-center flex-1 md:flex-row lg:mt-0">
        <div className="flex-1">
          <img src="/adminlogin.svg" className="w-full sm:w-2/3" />
        </div>
        <div className="flex-1 w-3/4">
          <Box
            component="form"
            className="flex flex-col gap-4 sm:w-3/4"
            onSubmit={handleSubmit(onLogin)}
          >
            <h1 className="text-3xl font-bold">Login to your Account</h1>
            <p className="text-red-600 self-center">{loginErr}</p>
            <TextField
              label="Email"
              className="w-full rounded-sm"
              {...register("email")}
              helperText={errors.email?.message}
              error={errors.email ? true : false}
            />
            <TextField
              label="Password"
              className="w-full rounded-sm"
              {...register("password")}
              helperText={errors.password?.message}
              error={errors.password ? true : false}
              type={passwordVisible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <a href="" className="self-end underline">
              Forgot Password ?
            </a>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              className="w-full"
              type="submit"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                padding: "12px",
              }}
            >
              Login
            </Button>
          </Box>
        </div>
      </div>
      <img src="/adminwave.svg" className="wave hidden md:block" />
    </div>
  );
};

export default AdminLogin;
