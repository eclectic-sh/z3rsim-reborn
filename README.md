# Z3R Simulator - Deobfuscated Source

A reconstructed TypeScript source tree for **Z3R Simulator**, a tool
for simulating Zelda: A Link to the Past Randomizer runs, originally
published at 
[z3rsim.com](https://z3rsim.com/) by
[Kyong92](https://www.twitch.tv/kyong92).

The original source was never released. This project takes the public
production bundle (`main.c8df59dcefef6190165d.bundle.js`), unminifies
and splits it, and rebuilds it into readable Angular 4 TypeScript -
with the original file structure, decorators, and templates recovered.

The result builds with Angular CLI and runs locally as a static site.
It's meant as a friendly **starting point** for anyone in the community
who wants to fork, study, or modernize the simulator.

---

## Status

- Full TypeScript source: ~18 components, 5 services, 11 models,
  15 dungeon setups, 2 location datasets, and the `itemLogFilter` pipe
- Builds with zero TypeScript errors against Angular 4.3.6
- Behavioral parity with the original bundle
- **The seed format is pre-2019 ALttPR.** Current seeds from
  [alttpr.com](https://alttpr.com/) will not load - a bundled default
  seed is included so you can still try it out.
- `ng serve` is broken on Node 12+ (the pinned `webpack-dev-server@2`
  depends on Node APIs that were removed). Use `ng build` and serve
  the `dist/` folder with any static HTTP server.

---

## Requirements

- **Node 8** - pinned in `.nvmrc` (Angular CLI 1.4.10 requires it)
- npm 5.x (ships with Node 8)
- A static HTTP server for viewing the build (Python's `http.server`
  works fine)

---

## Build & Run

```bash
# use the pinned Node version
nvm install 8
nvm use 8

# install deps
npm install

# build
npm run build        # development build -> dist/
npm run build:prod   # production build (AOT + minification)

# serve the build
cd dist
python3 -m http.server 8000
# open http://localhost:8000
```

---

## Project Layout

```
src/
  main.ts                 bootstrap entry
  polyfills.ts            core-js + zone.js
  index.html              app shell (jQuery + Bootstrap + Font Awesome)
  styles.css              global styles
  tsconfig.json
  app.module.ts           NgModule (18 declarations, 4 providers)
  app-routing.module.ts   routes (/, /standard, /open, /inverted, …)
  environments/           dev + prod
  components/             component folders (.ts + .html + .css each)
  services/               injectables (Game, Seed, SeedParser, ItemNames, WindowRef)
  models/                 typed classes/enums (Items, Config, Location, …)
  dungeons/               dungeon/overworld setup files
  data/                   Light World + Dark World location tables
  pipes/                  itemLogFilter
assets/                   PNGs (item/dungeon/map icons)
hotfix/                   JSON data (item map, location map, spoiler log)
fonts/                    Font Awesome + Hammersmith One
scripts/                  helper scripts (generateItemArray, spoilerLogAdapter, …)
.angular-cli.json         build config (copies assets, hotfix, fonts, vendor JS)
package.json              Angular 4.3.6 deps pinned
.nvmrc                    Node 8
```

The app builds into a self-contained `dist/` that can be served from
any static host.

---

## Deobfuscation Notes

The reconstruction preserves the original bundle's behavior. The only
intentional deviations, each marked in-file with `// Original:` /
`// Fixed:` comments, are three small bug fixes that would otherwise
cause errors in the reconstructed source.

Variable names are best-guess as the originals have been lost. Should
help in reading the code.

One CSS deviation: `node.component.css` and `tracker-node.component.css`
use `url(/assets/...)` with a leading slash instead of the original
`url(assets/...)`. This is required for Angular CLI's webpack to
resolve asset paths from the project root rather than from each CSS
file.

An added banner on the app homepage notes the pre-2019 seed-format issue.

Everything else matches the original bundle.

---

## Credits

Original simulator by **Kyong92** -
[Twitch](https://www.twitch.tv/kyong92) •
[Twitter](https://twitter.com/kyong92) •
[Discord](https://discord.gg/nPJpFQB)

This project is built on top of the public site rip preserved by
**DerpaholicRex** at
[github.com/DerpaholicRex/z3rsim_offline](https://github.com/DerpaholicRex/z3rsim_offline)
- huge thanks for keeping the original bundle available so the
community had something to work from.

The game logic mirrors the VT v30 ALttPR ruleset that the original
simulator was built against.

If Kyong would like this repository taken down or updated in any way,
please open an issue and it will be honored.

---

## Contributing

Please limit contributions to any errors found that don't reflect the
original source code. Any modernization should be copied / forked from
this into its own project.

---

## Potential Directions for Future Projects

- Update seed handling to the current [alttpr.com](https://alttpr.com/)
  API so modern seeds load
- Upgrade Angular to a supported version (would also restore
  `ng serve`)
- Replace the deprecated `@angular/http` with `HttpClient`
- Add a modern bundler toolchain

---

## License

This repo claims no additional rights over the underlying work.
