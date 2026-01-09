#import <Foundation/Foundation.h>
@interface DBTransaction:NSObject
@property(nonatomic)double amount;
@property(nonatomic,strong)NSString *category;
@end