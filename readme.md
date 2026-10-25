Note: I am not a web developer, and am aware that this is not the prettiest code, nor is it intended to be.

Pushes to main get automatically committed and built on the build branch via a github workflow, then the website hoster targets the build branch to automatically deploy it.

For testing locally, run in the command line: "npm run dev"