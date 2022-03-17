# Settings in .env have prio
if [ -f ./configuration/settings.ini ]; then
  set -o allexport
  source ./configuration/settings.ini
  set +o allexport
fi


copy -r ./common/src/web/ ./src/web/common