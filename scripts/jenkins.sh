apt-get update
1 | apt-get install openjdk-8-jdk wget gnupg -y
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add -
sh -c 'echo deb https://pkg.jenkins.io/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 9B7D32F2D50582E6
apt-get update -y
apt-get install jenkins -y