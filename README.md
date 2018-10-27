# valid-github-username

## Installation
Make sure you have node installed. Then clone the repo.

    git clone https://github.com/andrewda/valid-github-username.git
    
## Usage
Use `npm test` to use the program.
    
## Checks it performs:

    > valid-github-username@0.0.1 test /home/sheshank/valid-github-username
    > mocha test.js



      removes illegal characters
        ✓ removes spaces
        ✓ removes special characters

      removes illegal hyphen placement
        ✓ removes consecutive dashes
        ✓ removes trailing dashes
        ✓ removes leading dashes

      length should not exceed 39
        ✓ does not accept length > 39

## Final output:
If it passes it should output `passing`. For ex:

      6 passing (7ms)

