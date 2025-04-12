DESCRIPTION = "Python app to scan BLE devices"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COREBASE}/LICENSE;md5=b97a012949927931feb7793eee5ed924"

inherit systemd

SYSTEMD_AUTO_ENABLE = "enable"
SYSTEMD_SERVICE:${PN} = "app.service"

SRC_URI = " \
  file://app.py \
  file://app.service \
"

do_install() {
	install -d ${D}${exec_prefix}/bin
	install -d ${D}${systemd_unitdir}/system
  install -m 0644 ${WORKDIR}/app.py ${D}${exec_prefix}/bin/app.py
  install -m 0644 ${WORKDIR}/app.service ${D}/${systemd_unitdir}/system
}

FILES_${PN} = " \
  ${exec_prefix}/bin/app.py \
  ${systemd_unitdir}/system/app.service \
"

RDEPENDS_${PN} = "python3-bleak"
