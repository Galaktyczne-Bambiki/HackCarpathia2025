FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN \
    apt update && \
    apt install -yq gawk wget git diffstat unzip texinfo gcc \
    build-essential chrpath socat cpio python3 python3-pip \
    python3-pexpect xz-utils debianutils iputils-ping python3-git \
    python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 \
    nano sudo lzop screen curl

RUN curl https://storage.googleapis.com/git-repo-downloads/repo > /bin/repo && chmod a+x /bin/repo
RUN groupadd github -g 1000
RUN useradd -ms /bin/bash -p github github -u 1028 -g 1000 && \
        usermod -aG sudo github && \
        echo "github:github" | chpasswd

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen

ENV LANG=en_US.utf8

USER github
WORKDIR /home/github

RUN git config --global user.email "build@example.com" && \
    git config --global user.name "Build" && \
    git config --global color.ui true && \
    git config --global credential.helper 'store --file ~/.git-credentials'
