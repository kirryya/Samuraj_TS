import {InitialStateType} from "../redux/users-reducer";

export const updateObjectInArray = (items: InitialStateType, itemId: number, objPropName: string, newObjProps: { followed: boolean }) => {
    return items.users.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
