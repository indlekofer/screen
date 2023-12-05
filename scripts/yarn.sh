#!/bin/bash
docker compose run dev-nodejs bash -c "yarn $*" --rm
