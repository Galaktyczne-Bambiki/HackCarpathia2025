FILESEXTRAPATHS:prepend := "${THISDIR}/${PN}:"

DEPENDS:append = " e2fsprogs libarchive zstd"
do_package_qa[noexec] = "1"

SRC_URI += "\
	file://swupdate.cfg \
	file://swupdate.default \
"

do_install:append () {
	install -m 644 ${WORKDIR}/swupdate.cfg ${D}${sysconfdir}/
	install -d ${D}${sysconfdir}/default/
	install -m 644 ${WORKDIR}/swupdate.default ${D}${sysconfdir}/default/swupdate
}
