import { HookSyncCallback, HookErrorCallback, Document } from "mongoose";

export interface IUser extends Document {
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    bio: String,
    pre<T extends Document = Document>(
        method: "init" | "validate" | "save" | "remove",
        fn: HookSyncCallback<T>,
        errorCb?: HookErrorCallback
      ): this;
}
