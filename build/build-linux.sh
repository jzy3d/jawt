# may need to apt-get install libx11-dev

#/usr/lib/jvm/java-1.8.0-openjdk-amd64
#/usr/lib/jvm/java-1.11.0-openjdk-amd64
#/usr/lib/jvm/jdk-17-panama/



## Generate the header
javac src/main/java/MyCanvas.java -h src/main/c/x11

## Clean
rm -rf target/*


## Create AWT lib

### Compile
gcc \
  -I/usr/lib/jvm/jdk-17-panama/include/ \
  -I/usr/lib/jvm/jdk-17-panama/include/linux \
  -I/usr/include \
  -I/usr/include/X11/ \
  -c src/main/c/x11/MyCanvas.c \
  -o target/MyCanvas.o
  #-v \


### Link to create a lib
gcc target/MyCanvas.o \
  -L/usr/lib/jvm/jdk-17-panama/lib \
  -L/usr/lib/jvm/jdk-17-panama/lib/server \
  -ljawt -ljava -ljvm -lX11 \
  -shared \
  -o target/MyCanvas.so
# -v \


cp target/MyCanvas.so lib/libMyCanvas.so


## Build the Java program using the lib
javac src/main/java/MyCanvas.java -d target

## Run the Java program
cd target
java -Djava.library.path=/Users/martin/Dev/jzy3d/external/jawt/target/ MyCanvas


java -Djava.library.path=./target/ src/main/java/MyCanvas.java



# In one step

## Compile
gcc \
  -I/usr/lib/jvm/jdk-17-panama/include/ \
  -I/usr/lib/jvm/jdk-17-panama/include/linux \
  -I/usr/include \
  -I/usr/include/X11/ \
  -L/usr/lib/jvm/jdk-17-panama/lib/ \
  -L/usr/lib/jvm/jdk-17-panama/lib/server \
  -ljawt -ljava -ljvm \
  -lX11 \
  src/main/c/x11/MyCanvas.c \
  -o target/MyCanvasX11
  #-o target/coucou.o \
  #-v \

# Other JVM in 1 step
gcc \
    -I/usr/lib/jvm/java-1.11.0-openjdk-amd64/include/ \
    -I/usr/lib/jvm/java-1.11.0-openjdk-amd64/include/linux \
    -I/usr/include \
    -L/usr/lib/jvm/java-1.11.0-openjdk-amd64/lib/ \
    -ljawt \
    -lX11 \
    -o target/coucou.o \
    src/main/c/x11/MyCanvas.c

export JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64

gcc \
    -I"$JAVA_HOME\include" \
    -I"$JAVA_HOME\include\linux" \
    -I/usr/include \
    -L"$JAVA_HOME\lib" \
    -ljawt \
    -lX11 \
    -o target/coucou.o \
    src/main/c/x11/MyCanvas.c



    gcc \
        -I$JAVA_HOME\include \
        -I$JAVA_HOME\include\linux \
        -I/usr/include \
        -L$JAVA_HOME\lib \
        -ljawt \
        -lX11 \
        -o target/coucou.o \
        src/main/c/x11/MyCanvas.c

  gcc \
        -I${JAVA_HOME}\include \
        -I${JAVA_HOME}\include\linux \
        -I/usr/include \
        -L${JAVA_HOME}\lib \
        -ljawt \
        -lX11 \
        -o target/coucou.o \
        src/main/c/x11/MyCanvas.c

# https://transang.me/library-path-in-gcc/

#/usr/lib/x86_64-linux-gnu/libX11.so
