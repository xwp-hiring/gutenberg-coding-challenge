# Welcome to the XWP Gutenberg Coding Challenge!

We are really happy that you decided to apply to XWP!

As part of the hiring process, we are trying to evaluate your technical skills and work experience.
The Gutenberg Coding Challenge you are about to take is part of this process.

This repository contains a custom Gutenberg block called _Country Card_.
It allows selecting a country from a list and displaying basic information about it.
If the selected country name occurs in other posts on the site, titles and excerpts of those posts will be listed in the card footer as a static list.

The design below presents two instances of the Country Card block (in a two-column layout).
The block to the right is in the _preview_ mode while the one to the left is in the _edit_ mode where a country can be selected.

![Country Card Block](screenshot.jpg?raw=true)

## The problem

Unfortunately, the Country Card block was not coded very well.
Apart from violating WordPress coding standards and best practices, the code is buggy and unreliable.
Moreover, the block preview does not resemble the design (see the screenshot above).

## Your task

**Your task is to fix all the issues you encounter.** Since it is a Gutenberg test, you should prioritize the frontend code.

Here is what are we looking for:
- Bug-free, reliable, and clean code.
- Semantic and consistent markup and styles.
- No visual regressions.
- Codebase that sticks to the WordPress and Gutenberg coding standards and best practices.

It should take you about **2 hours** to complete the challenge.

There are also a few additional remarks that may be helpful:
- Treat the screenshot above as the source of truth when it comes to the block design. Note that we are not expecting a pixel perfection.
- It is okay for the related posts in the card footer to be static when viewed on the frontend. In this version of the block, we are not looking into making the list of posts dynamic.
- The Country Card block has not been used so far on any site (i.e. you do not need to worry about a block deprecation).
- You are free to install additional dependencies, if needed.

## The workflow

Fork this repo, create a feature branch, and push all your changes there.

When you are done, issue a pull request against the `main` branch in your fork.
Let us know that your code is ready for review.

Make sure the fork is publicly accessible so that we can review it.

We will be reviewing your work in its entirety so please pay attention to the process you follow.

**Good luck!**

---

# Country Card Block Plugin

A WordPress block rendering a card with country information.

To test, add the Country Card block in the block editor.

## Requirements

* [NVM](https://github.com/creationix/nvm/) - to install the correct [Node.js](https://nodejs.org/en/) version.
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - to install Javascript dependencies.

### Local environment

Since you need a WordPress environment to run the plugin, the quickest way to get up and running is to use the bundled `wp-env` environment.

`wp-env` requires Docker to be installed. There are instructions available for installing Docker on [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/), [all other versions of Windows](https://docs.docker.com/toolbox/toolbox_install_windows/), [macOS](https://docs.docker.com/docker-for-mac/install/), and [Linux](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script).

## Installation

Clone this repository to you local computer, `cd` to this directory and install the required version of Node and NPM dependencies:

```sh
nvm install
npm install
```

Then, start the local environment

```sh
npm run env start
```

Finally, run the build process in a watch mode:

```sh
npm start
```

Now, you can access the site with the Country Card block plugin installed and activated:

http://localhost:8888 (Username: `admin`, Password: `password`)

In order to stop the Docker containers run:

```sh
npm run env stop
```
