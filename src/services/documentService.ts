

let documents = [
  { 
    id: 1,
    message: "hello world" 
  },
]

export const getAllDocuments = () => {
  return documents
}

export const getOneDocument = (id:number) => {
  const matchedDocument = documents.find((d) => d.id === id)

  if (!matchedDocument) {
    throw new Error('Document not found')
  }
  return matchedDocument
}



