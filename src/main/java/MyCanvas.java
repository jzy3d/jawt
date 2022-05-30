import java.awt.Canvas;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;

public class MyCanvas extends Canvas {
  /**
   * System.loadLibrary(String libname) lets you load from the default path -- The Java library
   * path.
   * 
   * The other System.load(String filename) lets you load it from an absolute path, which you must
   * specify as your filename.
   * 
   * If you don't want to mess with you java.library.path environment variable, you should use
   * System.load()
   */
  static {
    String javaLibPathKey = "java.library.path";
    String javaLibraryPath = System.getProperty(javaLibPathKey);
    System.out.println(javaLibraryPath);
    
    OperatingSystem os = new OperatingSystem();
    
    File f = null;
    if(os.isUnix()) {
      f = new File("./lib/libMyCanvas.so");
    }
    else if(os.isWindows()) {
      f = new File("./lib/MyCanvas.dll");
    }
    System.load(f.getAbsolutePath());

  }

  public native void paint(Graphics g);

  public static void main(String[] args) {
    Frame f = new Frame();
    f.setBounds(0, 0, 500, 210);
    f.add(new MyCanvas());
    f.addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent ev) {
        System.exit(0);
      }
    });
    f.show();
  }

}
