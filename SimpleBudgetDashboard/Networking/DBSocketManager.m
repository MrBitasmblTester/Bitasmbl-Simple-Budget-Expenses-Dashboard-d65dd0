#import "DBSocketManager.h"
@implementation DBSocketManager
+ (instancetype)shared{static id s;return s?: (s=[self new]);}
- (void)connect{}
@end