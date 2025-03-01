#!/system/bin/sh
export  PREFIX=/data/data/%package/files
RISH_APPLICATION_ID=%package
DEX=$PREFIX/lib/rish_shizuku.dex
/system/bin/app_process -Djava.class.path="$DEX" /system/bin --nice-name=rish rikka.shizuku.shell.ShizukuShellLoader "$@"
