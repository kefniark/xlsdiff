## XLS diff
Small CLI tool to be able to git diff excel files

This tool just convert `*.xls` to text, for git to be able to diff files

### Usage
```sh
# Install xlsdiff
npm install xlsdiff -g

# Add to gitconfig
or
```

from now you can now diff excel files
```sh
git diff mytest.xls
```

### Extra

And to make the diff nicer looking (and more human readable)
```
git config --global color.diff.old "red reverse"
git config --global color.diff.new "green reverse"
```

and use
```
git diff --word-diff=color mytest.xls
```