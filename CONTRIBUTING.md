We're thrilled you're interested in contributing to our project! This guide outlines how you can get involved and make valuable contributions.

## <span id="contributing">🤝 Contributing</span>

Follow these steps to contribute to the project:

- ### Step 1

  Fork this repository
<p align="center">
<img src="https://i.ibb.co/8mFnXMg/fork.png" alt="fork" border="0">
</p>

- ### Step 2:

  Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the copy to clipboard icon.

<p align="center">
    <img src="https://i.ibb.co/tKfCC39/clone.png" alt="clone" border="0">
</p>

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


The code will look something like this :

```bash
git clone https://github.com/iamurmani/skilluptechie.git
```

- ### Step 3:

  Navigate to StarterHive on your device

  ```bash
  cd skilluptechie
  ```

- ### Step 4:

  - Add an upstream link to the main branch in your cloned repo

  ```bash
  git remote add upstream https://github.com/iamurmani/skilluptechie
  ```

  - Keep your cloned repo up to date by pulling from upstream (this will also avoid any merge conflicts while committing new changes)

  ```bash
  git pull upstream main
  ```

- ### Step 5:

  Create your feature branch (This is a necessary step, so don't skip it)

  ```bash
  git checkout -b <feature-name>
  ```

- ### Step 6: Make necessary changes and commit those changes

  Add your commits to the staging

  ```
  git add .
  ```

- ### Step 7: Commit the changes

  Now commit those changes using the `git commit` command:

  ```bash
  git commit -m "Write a meaningful message"
  ```

- ### Step 8: Push your code.

  Push your changes using the command `git push` :

  ```bash
  git push -u origin your-branch-name
  ```

- ### Step 9:

  Create a PR on Github. (Don't just hit the create a pull request button, you must write a PR message to clarify why and what are you contributing)

**Additional Guidelines**

- **Code Style:** If we have specific coding style guidelines (e.g., using a linter or formatter), please follow them to ensure consistency.
- **Issues:** Use GitHub issues to report bugs, request features, or ask questions. Search for existing issues before creating a new one to avoid duplicates.
- **Licensing:** Ensure your contributions adhere to the project's license (usually specified in a LICENSE file).

**We Appreciate Your Contributions!**

Thank you for considering contributing to our project. We value your time and effort. By following these guidelines, you'll help us maintain a high-quality codebase and keep the project moving forward.

**Staying Connected**

- Feel free to reach out to us through GitHub discussions or issues if you have any questions or need assistance.
- We encourage you to explore the project and share your ideas for improvement!

**Happy Coding!**
