"use client"

import { useState } from 'react';
import { Info } from './info'
import { Participants } from './participants'
import  {Toolbar}  from './toolbar'
import { useHistory, useSelf, useCanRedo, useCanUndo, useUndo, useRedo } from '@/liveblocks.config'
import { CanvasMode, CanvasState } from '@/types/canvas'

interface CanvasProps{
  boardId: string;
}

export const Canvas = ({
  boardId
}: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  })
  const i = useSelf((me) => me.info)  
  const history = useHistory();
  const canUndo = useUndo();
  const canRedo = useRedo();
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
        
    </main>
  )
}
