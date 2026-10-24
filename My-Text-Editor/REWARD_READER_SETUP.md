# My Library — book cards and reward-reader setup

## What's included
- `index.html`: compact book-selection cards and a small link to the existing editor.
- `reward.html`: a clearly labelled setup screen for the reward-ad step.
- `viewer.html`: the existing reader, unchanged.
- `editor.html`: the existing editor, unchanged.

## Important: not yet a live monetized reader
The ZIP supplied for this update did not include the actual book manuscripts/Collections JSON files or an ad-provider integration. The reward page therefore does **not** simulate an ad, countdown, or reward. Do not treat it as a live monetization system.

## Next steps for production
1. Add the full book JSON files under a `Collections/` directory. The viewer's existing JSON format is documented in `README.md`.
2. Connect a provider that explicitly permits rewarded ads for unlocking this type of book content. Follow its opt-in, reward verification, and fallback rules.
3. After a provider verifies a reward, open the correct book in `viewer.html` using a secure, provider-compliant flow. Do not unlock based only on a client-side timer or query parameter.
4. Test the reader with each actual manuscript and on the deployed hosting origin.

The two catalog entries reflect book titles/descriptions already present in the supplied author website. They do not imply the full manuscripts are included in this ZIP.
