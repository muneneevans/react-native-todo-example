export const TaskSchema = {
    name: 'Task',
    properties: {
        name: 'string',
        description: 'string',
        completed: { type: 'bool', default: false },
    }
}
export const FolderSchema = {
    name: 'Folder',
    properties: {
        name: 'string',
        color: 'string',
        tasks: 'Task[]',
        picture: 'data?' // optional property
    }
}