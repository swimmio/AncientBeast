## Getting Involved

After you've play-tested the development version of the game, there are 2 main ways you can contribute to the project.
For a more comprehensive guide on how to help out the project, you can check out the [Make Your Contribution](https://AncientBeast.com/contribute) guide.

### Report Issues

If you encounter any problems with this version, you can report them to our [GitHub Issue tracker](https://github.com/FreezingMoon/AncientBeast/issues).
Very often, it will be very helpful for debugging purposes to fetch game logs when encountering issues. You can use the `AB.getLog()` function from the browser console window in order to fetch the current match log.
In order to open up Google Chrome browser's console, you can press `Ctrl + Shift + J`. To replay a match, you'll have to be in the pre-match screen, paste its log in the console and then press the `Return` key.

### Patch Game

The main coding language used is Javascript, feel free to create patches and propose them by making a Pull Request.
You should look around on the GitHub Issue tracker for open issues, priority being the ones that are assigned to the next [milestone](https://github.com/FreezingMoon/AncientBeast/milestones) and are tagged "[Priority](https://github.com/FreezingMoon/AncientBeast/labels/Priority)", while also lacking the "[Brainstorm](https://github.com/FreezingMoon/AncientBeast/labels/Brainstorm)" tag. You can ping [DreadKnight](https://github.com/DreadKnight) in the [Discord server](https://discord.gg/x78rKen) in order to be assigned to something specific, otherwise you can comment on a specific issue in order to receive the green light for it, making sure there's nobody else currently working on the issue or that design hasn't changed and a patch is still required. The game engine we're using is the [community edition](https://github.com/photonstorm/phaser-ce) of [Phaser](https://github.com/photonstorm/phaser), which is free and open source, and has nice [documentation](https://photonstorm.github.io/phaser-ce).

In order to patch the game and constantly test it, run it using this command, which will keep track of any file changes:

```sh
npm run start:dev
```

Then access it using [Chromium](https://chromium.org) or [Google Chrome](https://google.com/chrome), as support for other browsers is not guaranteed:

```
localhost:8080
```

Keep in mind that you'll have to refresh the webpage after making changes. Make sure to disable browser caching by using `Ctrl + Shift + J`, then going to the **Network** tab and checking **Disable cache**.

### Next Step

You are free to browse [existing issues](https://github.com/FreezingMoon/AncientBeast/issues) (for beginner coders there are issues labeled as [easy](https://github.com/FreezingMoon/AncientBeast/issues?q=is%3Aopen+is%3Aissue+label%3Aeasy)) and comment on the ones that you want to take a swing at in order to make sure the issue is still relevant and that nobody else is working on it. You can also drop by the project's [Discord server](https://discord.gg/x78rKen) and mention your skills and that you're interested in helping out; you'll be assigned to a specific issue. When you're done, simply create a **Pull Request**. Note that you might need to pull in from master repository before doing so. Your patches will get reviewed and tested, if there are issues with them, you'll receive feedback in order to make corrections. Otherwise, your pull request will get approved and merged into the master branch and you'll get credited for it.

---

## More Ways

Coding is not the only thing required in order to make this project as awesome as possible, see [How to Contribute](https://ancientbeast.com/contribute) guide.
