#export JAVA_HOME=/System/Library/Frameworks/JavaVM.framework/Versions/1.6.0/Home
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_40.jdk/Contents/Home/
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home/
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-14.jdk/Contents/Home/
#export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk-panama/Contents/Home/



#gcc src/main/c/MyCanvas.c -I${JAVA_HOME}/include/ -I${JAVA_HOME}/include/darwin

gcc src/main/c/MyCanvas.c -I/Library/Java/JavaVirtualMachines/jdk-17.jdk-panama/Contents/Home/include/ -I/Library/Java/JavaVirtualMachines/jdk-17.jdk-panama/Contents/Home/include/darwin
