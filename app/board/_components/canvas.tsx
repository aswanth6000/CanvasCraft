"use client"

import { useCallback, useState } from 'react';
import { Info } from './info'
import { Participants } from './participants'
import  {Toolbar}  from './toolbar'
import { useHistory, useSelf, useCanRedo, useCanUndo, useUndo, useRedo, useMutation } from '@/liveblocks.config'
import { Camera, CanvasMode, CanvasState } from '@/types/canvas'
import  {CursorsPresence}  from './cursor-presense';
import { pointerEventCanvasPoint } from '@/lib/utils';



interface CanvasProps{
  boardId: string;
}

export const Canvas = ({
  boardId
}: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  })
  const [camera, setCamera] = useState<Camera>({x: 0, y: 0})

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);
  const i = useSelf((me) => me.info)  
  const history = useHistory();
  const canUndo = useUndo();
  const canRedo = useRedo();


  const onPointerMove = useMutation((
    { setMyPresence }, 
    e: React.PointerEvent
  ) => {
    e.preventDefault();

    const current = pointerEventCanvasPoint(e, camera)

    // if (canvasState.mode === CanvasMode.Pressing) {
    //   startMultiSelection(current, canvasState.origin);
    // } else if (canvasState.mode === CanvasMode.SelectionNet) {
    //   updateSelectionNet(current, canvasState.origin);
    // } else if (canvasState.mode === CanvasMode.Translating) {
    //   translateSelectedLayers(current);
    // } else if (canvasState.mode === CanvasMode.Resizing) {
    //   resizeSelectedLayer(current);
    // } else if (canvasState.mode === CanvasMode.Pencil) {
    //   continueDrawing(current, e);
    // }

    setMyPresence({ cursor: current });
  }, 
  // [
  //   continueDrawing,
  //   camera,
  //   canvasState,
  //   resizeSelectedLayer,
  //   translateSelectedLayers,
  //   startMultiSelection,
  //   updateSelectionNet,
  // ]
  []);

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  return (
    <main
    className='h-full w-full relative bg-neutral-100 touch-none'
    >
        <Info boardId={boardId}/>
        <Participants/>
        <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
        />
        <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        // onPointerDown={onPointerDown}
        // onPointerUp={onPointerUp}
      >
         <g
          style={{
            transform: `translate(${camera.x}px, ${camera.y}px)`
          }}
        >
            <CursorsPresence/>
          </g>
        </svg>
        
    </main>
  )
}
