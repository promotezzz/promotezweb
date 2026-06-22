export interface FileEntry {
  path: string;
  name: string;
  size: number;
  modified: string;
  isDir: boolean;
}

export interface RenamePreview {
  original: string;
  newName: string;
}

export interface DuplicateGroup {
  hash: string;
  size: number;
  files: string[];
}

export interface CleanupItem {
  name: string;
  path: string;
  sizeBytes: number;
  fileCount: number;
  category: string;
}

export interface ContextMenuEntry {
  name: string;
  command: string;
  icon: string | null;
  scope: string;
  enabled: boolean;
  registryPath: string;
}
