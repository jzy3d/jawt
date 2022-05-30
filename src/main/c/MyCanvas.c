//#include "MyCanvas.h"
#include "jawt_md.h"

/*
 * Class:     MyCanvas
 * Method:    paint
 * Signature: (Ljava/awt/Graphics;)V
 */
JNIEXPORT void JNICALL Java_MyCanvas_paint
(JNIEnv* env, jobject canvas, jobject graphics)
{
    JAWT awt;
    JAWT_DrawingSurface* ds;
    JAWT_DrawingSurfaceInfo* dsi;
    JAWT_DrawingSurfaceInfo* dsi_;
    jboolean result;
    jint lock;
    GC gc;

    short       i;
    char        *testString = "^^^ rendered from native code ^^^";

    /* Get the AWT */
    awt.version = JAWT_VERSION_9;
    if (JAWT_GetAWT(env, &awt) == JNI_FALSE) {
        printf("AWT Not found\n");
        return;
    }

    /* Get the drawing surface */
    ds = awt.GetDrawingSurface(env, canvas);
    if (ds == NULL) {
        printf("NULL drawing surface\n");
        return;
    }

    /* Lock the drawing surface */
    lock = ds->Lock(ds);
    if((lock & JAWT_LOCK_ERROR) != 0) {
        printf("Error locking surface\n");
        awt.FreeDrawingSurface(ds);
        return;
    }

    /* Get the drawing surface info */
    dsi = ds->GetDrawingSurfaceInfo(ds);
    if (dsi == NULL) {
        printf("Error getting surface info\n");
        ds->Unlock(ds);
        awt.FreeDrawingSurface(ds);
        return;
    }

    /* Get the platform-specific drawing info */
    dsi_ = (JAWT_DrawingSurfaceInfo*)dsi->platformInfo;


    /* Now paint */
    gc = XCreateGC(dsi_->display, dsi_->drawable, 0, 0);
    XSetBackground(dsi_->display, gc, 0);
    for (i=0; i<36;i++)
    {
        XSetForeground(dsi_->display, gc, 10*i);
        XFillRectangle(dsi_->display, dsi_->drawable, gc,
                        10*i, 5, 90, 90);
    }
    XSetForeground(dsi_->display, gc, 155);
    XDrawImageString(dsi_->display, dsi_->drawable, gc,
                        100, 110, testString, strlen(testString));
    XFreeGC(dsi_->display, gc);


    /* Free the drawing surface info */
    ds->FreeDrawingSurfaceInfo(dsi);

    /* Unlock the drawing surface */
    ds->Unlock(ds);

    /* Free the drawing surface */
    awt.FreeDrawingSurface(ds);
}
