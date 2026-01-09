#import <Foundation/Foundation.h>
@interface DBSocketManager:NSObject
+ (instancetype)shared;
- (void)connect;
@end