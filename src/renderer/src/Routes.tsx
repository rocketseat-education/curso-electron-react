import { Router, Route } from 'electron-router-dom'

import { Default } from './pages/layouts/Default'
import { Document } from './pages/document'
import { Blank } from './pages/blank'

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
