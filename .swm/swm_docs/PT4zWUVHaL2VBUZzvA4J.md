### Package Requirements

First install (or make sure you have) the latest LTS version of [Node.js](https://nodejs.org). In case you need to have different versions of it for other projects as well, you should definitely use `nvm` (Node version manager), which is a tool that makes it easy to manage multiple local Node installations. You can [find installation instructions here](https://github.com/nvm-sh/nvm#install--update-script), and then use it like:

```sh
nvm install --lts  # This will always install the latest LTS release.
nvm use --lts  # Use latest LTS now.
nvm alias default  # Make latest LTS your default.
```

`LTS` stands for `Long Term Support`, meaning it's a rather stable and hopefully non-problematic version.

### Installing Dependencies

In the terminal (`Ctrl + ~` in [VCS](https://code.visualstudio.com/download)), use the following command in order to easily install all the project dependencies:

```sh
npm install
```

This will read `package.json` and install all of the gameplay established npm package dependencies.  
The `npm install` command will also update any required dependencies if the `package.json` file changes. If you have not worked on the project in a while, make sure you update your fork and also run that command again, which will also compile the project, same as the `npm run build:dev` command.

### Compile Project

In order to build the development version of the game (also done by `npm install`), run the following command:

```sh
npm run build:dev
```

If you receive errors about the manifest or assets loading, try running `npm run assetLister` to create a list for the app.

### Beta Testing

To have the game up and running on your local machine, simply run this command in the terminal:

```sh
npm run start
```

Then access it using [Chromium](https://chromium.org) or [Google Chrome](https://google.com/chrome), as support for other browsers is not guaranteed:

```
localhost:8080
```

You can usually test our latest (and greatest) master branch without any hassle from our auto-deployed [beta app](https://beta.ancientbeast.com).

A handy tip while testing: you can right click the game tab and mute it by simply clicking the `Mute site` option.

---
