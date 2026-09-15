# Deployment

The first version targets Vercel with separate staging and production environments.

GitHub Actions are cost-controlled and run only on `main` pushes and manual dispatch. PR verification is done locally by developers.

Production deploys should happen after staging validation. Keep runtime requirements documented so the app can later move to Google Cloud Run.
