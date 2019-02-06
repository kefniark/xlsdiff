## XLS diff
Small CLI tool to be able to git diff excel files

This tool just convert `*.xls` to text, for git to be able to diff files

### Usage
```sh
# Install xlsdiff
npm install xlsdiff -g

# Add to gitconfig
git config --global diff.xls.binary true
git config --global diff.xls.textconv xlsdiff
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