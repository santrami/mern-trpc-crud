import { trpc } from "../trpc";

import React from 'react'
import { json } from "express";

function NotesList() {

    const notes = trpc.note.get.useQuery()

  return (
    <div>{JSON.stringify(notes)}</div>
  )
}

export default NotesList