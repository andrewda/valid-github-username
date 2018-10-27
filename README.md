# valid-github-username

This node.js program checks if a username is a valid github username. An example output from this program is:

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


      6 passing (7ms)

