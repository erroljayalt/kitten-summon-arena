# Kitten Summon Arena

A 3D browser card game inspired by Exploding Kittens, built with Three.js. Every card you play is summoned as a hologram in the middle of the table for all players to see.

The whole game is a single file, `index.html`. Open it in a browser to play.

## Features

- Full base-game rules: Attack (stacking), Skip, Favor, Shuffle, See the Future, Nope (including Nope chains), Defuse, Exploding Kittens, and cat-card pairs and triples.
- 3D table with an animated hologram for every card, card flights, and explosion effects.
- Computer opponents that remember See the Future and Nope attacks aimed at them.
- Cat customization: fur color, eye color, and headwear, with a live 3D preview.
- Seven arenas: outer space, beach, living room, bar, pyramids, neon rooftop, and volcano.
- Sound effects and two background music tracks, all synthesized with the Web Audio API. Music and sound can be turned on or off separately.
- MC Whiskers, a roasting announcer that uses the browser's built-in speech voices, with a voice picker.

## Multiplayer

Online lobbies use the runtime features of a claude.ai Artifact: a shared database, live presence, and viewer identity. The live multiplayer version runs at the published artifact link.

Opened from this repository directly, or hosted somewhere like GitHub Pages, the game runs in offline mode. Quick play against 3 bots works, but online lobbies are unavailable.

## Card art

All card art and characters are original. The card names follow the game's mechanics, but no official Exploding Kittens art or branding is used.
