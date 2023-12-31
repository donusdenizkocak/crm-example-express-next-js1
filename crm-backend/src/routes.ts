import { AuthController } from "./controller/AuthController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/new-user",
    controller: UserController,
    action: "newUser"
}, {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/login",
    controller: AuthController,
    action: "login"
}, {
    method: "post",
    route: "/register",
    controller: AuthController,
    action: "register"
}, {
    method: "put",
    route: "/user/update",
    controller: AuthController,
    action: "update"
}, {
    method: "put",
    route: "/user/change-password",
    controller: AuthController,
    action: "change-password"
}]