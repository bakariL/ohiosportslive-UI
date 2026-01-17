import { Injectable } from '@angular/core';

export interface FollowedItem {
  id: string;
  name: string;
  type: 'player' | 'team';
}

@Injectable({
  providedIn: 'root',
})
export class FollowService {
  private readonly storageKey = 'osl-following';

  getFollowedItems(): FollowedItem[] {
    return this.readItems();
  }

  isFollowing(type: FollowedItem['type'], id: string): boolean {
    return this.readItems().some((item) => item.type === type && item.id === id);
  }

  toggleFollow(item: FollowedItem): void {
    const items = this.readItems();
    const index = items.findIndex((entry) => entry.type === item.type && entry.id === item.id);
    if (index >= 0) {
      items.splice(index, 1);
    } else {
      items.push(item);
    }
    this.saveItems(items);
  }

  private readItems(): FollowedItem[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? (JSON.parse(raw) as FollowedItem[]) : [];
    } catch {
      return [];
    }
  }

  private saveItems(items: FollowedItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
