#include "MyCanvas.h"
#include "jawt_md.h"
#include <assert.h>

JNIEXPORT void JNICALL
Java_MyCanvas_paint(JNIEnv* env, jobject canvas, jobject graphics)
{
    JAWT awt;
    JAWT_DrawingSurface* ds;
    JAWT_DrawingSurfaceInfo* dsi;
    JAWT_Win32DrawingSurfaceInfo* dsi_win;
    jboolean result;
    jint lock;

    // Get the AWT. Request version 9 to access features in that release.
    awt.version = JAWT_VERSION_9;
    result = JAWT_GetAWT(env, &awt);
    assert(result != JNI_FALSE);

    // Get the drawing surface
    ds = awt.GetDrawingSurface(env, canvas);
    assert(ds != NULL);

    // Lock the drawing surface
    lock = ds->Lock(ds);
    assert((lock & JAWT_LOCK_ERROR) == 0);

    // Get the drawing surface info
    dsi = ds->GetDrawingSurfaceInfo(ds);


	// Get the platform-specific drawing info
      dsi_win = (JAWT_Win32DrawingSurfaceInfo*)dsi->platformInfo;
 
      //////////////////////////////
      // !!! DO PAINTING HERE !!! //
      //////////////////////////////
 
      // Free the drawing surface info
      ds->FreeDrawingSurfaceInfo(dsi);
 
      // Unlock the drawing surface
      ds->Unlock(ds);
 
      // Free the drawing surface
      awt.FreeDrawingSurface(ds);
}
