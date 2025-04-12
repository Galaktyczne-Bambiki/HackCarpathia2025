DESCRIPTION = "Library to access GATT information from BLE devices"
HOMEPAGE = "https://pybluez.github.io/"
SECTION = "devel/python"

DEPENDS = "glib-2.0 glibc ldconfig-native boost boost-native"

LICENSE = "GPL-2.0-only"
LIC_FILES_CHKSUM = "file://COPYING;md5=d056e552994ef4c3875b27e7d694b89e"

SRC_URI[sha256sum] = "42c962632b239a46e13eadcf63754298f7bda097405d17154b559c4376243230"

PYPI_PACKAGE = "gattlib"

inherit pypi setuptools3 pkgconfig

RDEPENDS:${PN} += "\
  gattlib \
  boost \
"
