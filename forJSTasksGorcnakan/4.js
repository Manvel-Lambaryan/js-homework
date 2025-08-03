var ViewerUser = /** @class */ (function () {
    function ViewerUser() {
    }
    ViewerUser.prototype.viewStats = function () {
        console.log("Viewer is viewing statistics.");
    };
    ViewerUser.prototype.deletePost = function () {
        console.log("I Will delete it");
    };
    ViewerUser.prototype.banUser = function () {
        console.log("I Will Ban that user");
    };
    return ViewerUser;
}());
var ModeratorUser = /** @class */ (function () {
    function ModeratorUser() {
    }
    ModeratorUser.prototype.deletePost = function () {
        console.log("Moderator is deleting a post.");
    };
    ModeratorUser.prototype.banUser = function () {
        console.log("Moderator is banning a user.");
    };
    return ModeratorUser;
}());
var AdminUser = /** @class */ (function () {
    function AdminUser() {
    }
    AdminUser.prototype.createPost = function () {
        console.log("Admin is creating a post.");
    };
    AdminUser.prototype.deletePost = function () {
        console.log("Admin is deleting a post.");
    };
    AdminUser.prototype.banUser = function () {
        console.log("Admin is banning a user.");
    };
    AdminUser.prototype.viewStats = function () {
        console.log("Admin is viewing statistics.");
    };
    return AdminUser;
}());
var viewer = new ViewerUser();
viewer.viewStats();
viewer.deletePost();
