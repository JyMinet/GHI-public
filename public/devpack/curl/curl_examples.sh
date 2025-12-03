#!/usr/bin/env bash
#
# GHI Sandbox – cURL Examples
# Global HashCost Index Initiative
# Version : Sandbox v0.2.0
#
# This script provides a set of cURL examples to interact with
# the GHI sandbox API.
#
# Default base URL: http://127.0.0.1:8000/v1/ghi
#
# Usage:
#   chmod +x curl_examples.sh
#   ./curl_examples.sh snapshot
#   ./curl_examples.sh history
#   ./curl_examples.sh regions
#   ./curl_examples.sh region north_america
#   ./curl_examples.sh stats

BASE_URL="${BASE_URL:-http://127.0.0.1:8000/v1/ghi}"

print_usage() {
  cat <<EOF
GHI Sandbox – cURL Examples

Usage:
  $(basename "$0") snapshot
  $(basename "$0") history
  $(basename "$0") regions
  $(basename "$0") region <region_id>
  $(basename "$0") stats

Options:
  BASE_URL environment variable can override the default:
    export BASE_URL="https://sandbox.example.com/v1/ghi"
    $(basename "$0") snapshot
EOF
}

snapshot() {
  echo "GET /snapshot"
  echo "URL: ${BASE_URL}/snapshot"
  curl -s "${BASE_URL}/snapshot"
  echo
}

history() {
  echo "GET /history"
  echo "URL: ${BASE_URL}/history"
  curl -s "${BASE_URL}/history"
  echo
}

regions() {
  echo "GET /regions"
  echo "URL: ${BASE_URL}/regions"
  curl -s "${BASE_URL}/regions"
  echo
}

region() {
  local region_id="$1"
  if [ -z "${region_id}" ]; then
    echo "Error: missing region_id"
    echo
    print_usage
    exit 1
  fi

  echo "GET /regions/${region_id}"
  echo "URL: ${BASE_URL}/regions/${region_id}"
  curl -s "${BASE_URL}/regions/${region_id}"
  echo
}

stats() {
  echo "GET /stats"
  echo "URL: ${BASE_URL}/stats"
  curl -s "${BASE_URL}/stats"
  echo
}

case "$1" in
  snapshot)
    snapshot
    ;;
  history)
    history
    ;;
  regions)
    regions
    ;;
  region)
    shift
    region "$1"
    ;;
  stats)
    stats
    ;;
  ""|help|-h|--help)
    print_usage
    ;;
  *)
    echo "Unknown command: $1"
    echo
    print_usage
    exit 1
    ;;
esac
