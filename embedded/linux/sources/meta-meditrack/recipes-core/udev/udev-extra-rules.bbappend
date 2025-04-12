FILESEXTRAPATHS:prepend := "${THISDIR}/${PN}:"

SRC_URI =+ " \
       file://bluetooth.rules \
"

do_install:append() {
    install -m 0644 ${WORKDIR}/bluetooth.rules ${D}${sysconfdir}/udev/rules.d/bluetooth.rules
}
