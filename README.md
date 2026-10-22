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

Play online at **https://kitten-summon-arena.vercel.app**.

1. Create a lobby. You get a 5-letter code and an invite link.
2. Friends open the invite link, or enter the code under "Join a lobby".
3. Fill empty seats with bots, then start the game.

The host's browser runs the game, and other players connect to it directly with PeerJS (WebRTC). There is no game server. Keep the host's tab open: if the host leaves, the lobby closes. Some strict networks, such as certain office or school Wi-Fi, block direct connections.

When the same file runs as a claude.ai Artifact, it uses the Artifact's shared database instead, with a public lobby list.

## Card art

All card art and characters are original. The card names follow the game's mechanics, but no official Exploding Kittens art or branding is used.
