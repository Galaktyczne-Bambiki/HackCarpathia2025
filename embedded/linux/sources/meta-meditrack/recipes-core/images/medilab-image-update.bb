DESCRIPTION = "Image update"

LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

inherit swupdate

SRC_URI = "\
    file://sw-description \
    file://update.sh \
"

IMAGE_DEPENDS = "medilab-image"
SWUPDATE_IMAGES = "medilab-image.rootfs.tar.zst"
SWUPDATE_IMAGES_FSTYPES[medilab-image] = ".tar.zst"
