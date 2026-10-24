# Kitten Summon Arena

A 3D browser card game inspired by Exploding Kittens, built with Three.js. Every card you play is summoned as a hologram in the middle of the table for all players to see.

The whole game is a single file, `index.html`. Open it in a browser to play.

## Features

- Two decks: **Classic** (13 card types, 2 to 5 players) and **Party** (49 card types, 2 to 15 players), including Targeted Attack, Reverse, Alter the Future, Undead Kitten, Collapsing Kitten, Sun Cat and many more.
- Full rules: Attack stacking, Nope chains, play-any-time cards, cat-card pairs and triples with wild Feral Cats.
- 3D table with an animated hologram for every card, card flights, and explosion effects.
- Computer opponents that remember what they have seen and react to the table.
- Cat customization: fur, eyes, pattern and headwear, in a cozy loaf-cat style with a live 3D preview.
- Seven arenas: outer space, beach, living room, bar, pyramids, neon rooftop, and volcano.
- Synthesized sound effects and music, with a sound menu for sound, music and the announcer.
- MC Whiskers, a roasting announcer with over 400 lines.
- Table chat with quick replies and speech bubbles over players, plus open-mic voice chat on the website (each player can turn their mic on and mute others for themselves).
- An in-game card guide that explains every card and combo.
- Works on phones: compact top bar, adaptive camera and seat layout, labels that stay on screen.

## Multiplayer

Play online at **https://kitten-summon-arena.vercel.app**.

1. Create a lobby. You get a 5-letter code and an invite link.
2. Friends open the invite link, or enter the code under "Join a lobby".
3. Fill empty seats with bots, then start the game.

The host's browser runs the game, and other players connect to it directly with PeerJS (WebRTC). There is no game server. Keep the host's tab open: if the host leaves, the lobby closes. Some strict networks, such as certain office or school Wi-Fi, block direct connections.

When the same file runs as a claude.ai Artifact, it uses the Artifact's shared database instead, with a public lobby list.

## Card art

Every card has painted art in `art/` (originals, 1024×1024). The game loads the 560×560 copies in `cards/`, named after each card's internal id (for example `cards/targeted.jpg`). A card without an image falls back to its drawn cat.

The art is original; card names follow the game's mechanics, but no official Exploding Kittens art or branding is used.
