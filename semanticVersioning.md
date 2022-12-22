# semantic versioning (SemVar)

semantic versioning is a way of labeling updates to a program.  Three numbers denote `major-release.minor-release.patch-release` - e.g. `1.0.0`

## versioning as a publisher of a package

version should always start a `1.0.0`.  (`0.0.0` is used historically when a package isn’t yet stable for initial release) 

`patch-release`: a change that doesn’t break anything, doesn’t add any functionality.  a minor bug fix
`minor-release`: a change that doesn’t break anything but adds functionality.
`major-release`: a change that breaks things.  A change to the API that is not backward compatible.

## versioning as the user of a package:
We can specify which version we want to use in the `package.json` file:

Patch releases only: `1.0.0 -> 1.0.1` but not `1.0.0 -> 1.1.0`?
- `1.0`
- `1.0.x`
- `~1.0.4` ( (any version compatible with 1.0.4  AKA any version up but not including the next minor update)

Minor releases only: `1.0.0 -> 1.1.0` but not `1.0.0 -> 2.0.0`?
- `1`
- `1.x` 
- `^1.0.4` (any version compatible with 1.0.4 AKA any version up to but not including the next major update)

Major releases too: `1.0.0 -> 2.0.0`
- `*`
- `x`

https://www.youtube.com/watch?v=kK4Meix58R4
