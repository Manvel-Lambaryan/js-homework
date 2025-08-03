interface ICanPost {
  createPost(): void;
}

interface ICanModerate {
  deletePost(): void;
  banUser(): void;
}

interface ICanViewStats {
  viewStats(): void;
}

class ViewerUser implements ICanViewStats, ICanModerate {
  viewStats(): void {
    console.log("Viewer is viewing statistics.");
  }

  deletePost(): void {
    console.log("I Will delete it");
  }

  banUser(): void {
    console.log("I Will Ban that user");
  }
}

class ModeratorUser implements ICanModerate {
  deletePost(): void {
    console.log("Moderator is deleting a post.");
  }

  banUser(): void {
    console.log("Moderator is banning a user.");
  }
}

class AdminUser implements ICanPost, ICanModerate, ICanViewStats {
  createPost(): void {
    console.log("Admin is creating a post.");
  }

  deletePost(): void {
    console.log("Admin is deleting a post.");
  }

  banUser(): void {
    console.log("Admin is banning a user.");
  }

  viewStats(): void {
    console.log("Admin is viewing statistics.");
  }
}

const viewer = new ViewerUser();
viewer.viewStats();
viewer.deletePost();