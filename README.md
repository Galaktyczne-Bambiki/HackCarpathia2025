# HackCarpathia 2025


repo init -u https://github.com/Galaktyczne-Bambiki/HackCarpathia2025.git -b embedded -m embedded/linux/default.xml
repo sync -j$(nproc)
source sources/oe-core/oe-init-build-env build

cd embedded/linux
./setup-environment build
source sources/oe-core/oe-init-build-env build
bitbake lab-image-minimal-update