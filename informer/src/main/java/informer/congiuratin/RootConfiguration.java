/**
 * 
 */
package informer.congiuratin;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

/**
 * @author firsov
 *
 */
@EnableWebMvc
@Configuration
@ComponentScan("informer")
@EnableTransactionManagement
public class RootConfiguration {
	
	@Bean
	public LocalEntityManagerFactoryBean getEntityManagerFactoryBean() {
		LocalEntityManagerFactoryBean lemfb = new LocalEntityManagerFactoryBean();
		lemfb.setPersistenceUnitName("kyivreclamaDS");
		return lemfb;
	}
	
	@Bean
	public PlatformTransactionManager transactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(getEntityManagerFactoryBean().getObject());
		return transactionManager;
	}

	@Bean
	public MessageSource messageSource() {
		ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
		messageSource.setBasename("classpath:i18n/locale");
		messageSource.setDefaultEncoding("UTF-8");
		return messageSource;
	}

	@Bean
	public LocaleResolver localeResolver() {
		CookieLocaleResolver localeResolver = new CookieLocaleResolver();
		return localeResolver;
	}

}
