

export const appendList = (list) => ({
    type: "APPEND_TODO_LIST",
    list,
})

export const deleteList = (id) => ({
    type: "DELETE_TODO_LIST",
    id,
});

export const completedList = (id) => ({
    type: "COMPLETE_TODO_LIST",
    id,
});

