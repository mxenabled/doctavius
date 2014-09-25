Doctavius
==================
###### A theme used as a submodule for Yuidocs

### Cloning a repo with a submodule
- After cloning a repo with doctavius as a submodule, you will notice the includes/doctavius folder is locally empty.
- This will update the submodule 'doctavius' to the most recent commit, init if it hasn't already, and put it in the folder includes/doctavius
```
$ git submodule update --name doctavius --init includes/doctavius
```

### Adding Doctavius to a repo
1. Call git submodule add for a url, put it in a folder called includes/doctavius and name it doctavius
```
$ git submodule add https://github.com/moneydesktop/doctavius.git includes/doctavius --name doctavius
```
2. If this is your first submodule, you will see a new .gitmodules file and a new file at the path for where doctavius will live
```
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      new file:   .gitmodules
#      new file:   includes/doctavius
#
```

** You can make changes to the submodule by navigating into the folder, but it will be referencing a different repo **

### Updating submodule
- After you've made changes to the submodule run 
```
git submodule update doctavius
```
- This will update the commit shaw git uses to reference the submodule's repo

# How To Use Yuidocs
1. Install yuidocs on your machine, if you haven't already. `npm install -g yuidoc`
2. Add/Update a file's documentation based on the Yuidoc syntax found here http://yui.github.io/yuidoc/syntax/index.html
3. Commit, push, merge your changes as normal
4. Run `yuidoc` to build

# Configuration
The yuidoc configuration settings are found in the yuidoc.json file in the root directory.
- **name:** This is linked to the logo found in the top left of the documentation website
- **description:** Not currently being used
- **version:** Not currently being used
- **options:**
  - *linkNative:* Whether to autolink native types to the Mozilla Developer Network
  - *outdir:* Tells yuidoc where to output the compiled files. Should be `"./docs"` by default
  - *paths:* An array of directories to look in when compiling the docs.
- **repo:** Used to add a link to the repo in the top right nav
- **nav:** Use to add custom links to the top right nav

#Example yuidoc.json
```json
{
  "name": "Xenon",
  "description": "A library of directives and other cool stuff",
  "version": "0.9.1",
  "options": {
    "linkNatives": "true",
    "outdir": "./docs",
    "themedir": "./includes/doctavius/",
    "paths": [
      "./javascripts/xenon/"
    ]        
  },
  "repo":"https://git.moneydesktop.com/dev/xenon",
  "nav": [
    {
      "link":"https://git.moneydesktop.com/dev/",
      "icon":"fa-user"
    }
  ]
}
```