import { describe, expect, it } from 'vitest'

import {
  buildFintechxContext,
  FINTECHX_FAQS,
  FINTECHX_KNOWLEDGE,
} from '@core/constants/fintechx-knowledge'

describe('FinTechX ChatBot Knowledge Base', () => {
  describe('Knowledge Structure', () => {
    it('should have Portuguese and English knowledge bases', () => {
      expect(FINTECHX_KNOWLEDGE.pt).toBeDefined()
      expect(FINTECHX_KNOWLEDGE.en).toBeDefined()
    })

    it('should have all required knowledge categories in Portuguese', () => {
      const kb = FINTECHX_KNOWLEDGE.pt
      expect(kb.company).toBeDefined()
      expect(kb.operatingHours).toBeDefined()
      expect(kb.officeLocations).toBeDefined()
      expect(kb.security).toBeDefined()
      expect(kb.phishing).toBeDefined()
      expect(kb.investments).toBeDefined()
      expect(kb.promotions).toBeDefined()
      expect(kb.general).toBeDefined()
    })

    it('should have all required knowledge categories in English', () => {
      const kb = FINTECHX_KNOWLEDGE.en
      expect(kb.company).toBeDefined()
      expect(kb.operatingHours).toBeDefined()
      expect(kb.officeLocations).toBeDefined()
      expect(kb.security).toBeDefined()
      expect(kb.phishing).toBeDefined()
      expect(kb.investments).toBeDefined()
      expect(kb.promotions).toBeDefined()
      expect(kb.general).toBeDefined()
    })
  })

  describe('Company Information', () => {
    it('should provide FinTechX company name', () => {
      expect(FINTECHX_KNOWLEDGE.pt.company.name).toBe('FinTechX')
      expect(FINTECHX_KNOWLEDGE.en.company.name).toBe('FinTechX')
    })

    it('should provide founding information', () => {
      const ptCompany = FINTECHX_KNOWLEDGE.pt.company
      const enCompany = FINTECHX_KNOWLEDGE.en.company

      expect(ptCompany.founded).toBe('2015')
      expect(enCompany.founded).toBe('2015')

      expect(ptCompany.founder).toBe('Círculo LAB / Laborit')
      expect(enCompany.founder).toBe('Círculo LAB / Laborit')
    })
  })

  describe('Operating Hours', () => {
    it('should provide operating hours in Portuguese', () => {
      const hours = FINTECHX_KNOWLEDGE.pt.operatingHours
      expect(hours.description).toBeDefined()
      expect(hours.weekdays).toBeDefined()
      expect(hours.weekends).toBeDefined()
      expect(hours.holidays).toBeDefined()
    })

    it('should provide operating hours in English', () => {
      const hours = FINTECHX_KNOWLEDGE.en.operatingHours
      expect(hours.description).toBeDefined()
      expect(hours.weekdays).toBeDefined()
      expect(hours.weekends).toBeDefined()
      expect(hours.holidays).toBeDefined()
    })

    it('should mention 24/7 automated support', () => {
      const ptHours = FINTECHX_KNOWLEDGE.pt.operatingHours
      const enHours = FINTECHX_KNOWLEDGE.en.operatingHours

      expect(ptHours.weekends).toContain('24/7')
      expect(enHours.weekends).toContain('24/7')
    })
  })

  describe('Office Locations', () => {
    it('should have a headquarters in São Paulo', () => {
      const ptHQ = FINTECHX_KNOWLEDGE.pt.officeLocations.headquarters
      const enHQ = FINTECHX_KNOWLEDGE.en.officeLocations.headquarters

      expect(ptHQ.city).toBe('São Paulo')
      expect(enHQ.city).toBe('São Paulo')
    })

    it('should have regional offices', () => {
      const ptOffices = FINTECHX_KNOWLEDGE.pt.officeLocations.regionalOffices
      const enOffices = FINTECHX_KNOWLEDGE.en.officeLocations.regionalOffices

      expect(ptOffices.length).toBeGreaterThan(0)
      expect(enOffices.length).toBeGreaterThan(0)

      const ptCities = ptOffices.map((o) => o.city)
      const enCities = enOffices.map((o) => o.city)

      expect(ptCities).toContain('Rio de Janeiro')
      expect(ptCities).toContain('Belo Horizonte')
      expect(ptCities).toContain('Porto Alegre')

      expect(enCities).toContain('Rio de Janeiro')
      expect(enCities).toContain('Belo Horizonte')
      expect(enCities).toContain('Porto Alegre')
    })

    it('should provide contact information', () => {
      expect(FINTECHX_KNOWLEDGE.pt.officeLocations.contact).toContain(
        'contato@fintechx.com.br',
      )
      expect(FINTECHX_KNOWLEDGE.en.officeLocations.contact).toContain(
        'contato@fintechx.com.br',
      )
    })
  })

  describe('Security & Data Protection', () => {
    it('should provide data privacy information', () => {
      const ptSecurity = FINTECHX_KNOWLEDGE.pt.security
      const enSecurity = FINTECHX_KNOWLEDGE.en.security

      expect(ptSecurity.dataPrivacy.length).toBeGreaterThan(0)
      expect(enSecurity.dataPrivacy.length).toBeGreaterThan(0)
    })

    it('should mention LGPD compliance', () => {
      const ptPrivacy = FINTECHX_KNOWLEDGE.pt.security.dataPrivacy
      const enPrivacy = FINTECHX_KNOWLEDGE.en.security.dataPrivacy

      expect(
        ptPrivacy.some((item) => item.toUpperCase().includes('LGPD')),
      ).toBe(true)
      expect(
        enPrivacy.some((item) => item.toUpperCase().includes('LGPD')),
      ).toBe(true)
    })

    it('should mention encryption', () => {
      const ptPrivacy = FINTECHX_KNOWLEDGE.pt.security.dataPrivacy
      const enPrivacy = FINTECHX_KNOWLEDGE.en.security.dataPrivacy

      expect(
        ptPrivacy.some((item) => item.toLowerCase().includes('criptografia')),
      ).toBe(true)
      expect(
        enPrivacy.some((item) => item.toLowerCase().includes('encryption')),
      ).toBe(true)
    })

    it('should describe authentication methods', () => {
      const ptAuth = FINTECHX_KNOWLEDGE.pt.security.authentication
      const enAuth = FINTECHX_KNOWLEDGE.en.security.authentication

      expect(ptAuth.toLowerCase()).toContain('bimétrica')
      expect(enAuth.toLowerCase()).toContain('biometric')
    })

    it('should provide 24/7 monitoring', () => {
      const ptMonitoring = FINTECHX_KNOWLEDGE.pt.security.monitoring
      const enMonitoring = FINTECHX_KNOWLEDGE.en.security.monitoring

      expect(ptMonitoring).toContain('24/7')
      expect(enMonitoring).toContain('24/7')
    })
  })

  describe('Phishing Prevention', () => {
    it('should provide phishing identification indicators', () => {
      const ptIndicators = FINTECHX_KNOWLEDGE.pt.phishing.identifyIndicators
      const enIndicators = FINTECHX_KNOWLEDGE.en.phishing.identifyIndicators

      expect(ptIndicators.length).toBeGreaterThan(0)
      expect(enIndicators.length).toBeGreaterThan(0)
    })

    it('should provide recommended actions for phishing emails', () => {
      const ptActions = FINTECHX_KNOWLEDGE.pt.phishing.actions
      const enActions = FINTECHX_KNOWLEDGE.en.phishing.actions

      expect(ptActions.length).toBeGreaterThan(0)
      expect(enActions.length).toBeGreaterThan(0)

      const ptActionText = ptActions.join('').toUpperCase()
      const enActionText = enActions.join('').toUpperCase()

      expect(ptActionText).toContain('ENCAMINHE')
      expect(enActionText).toContain('FORWARD')
    })

    it('should mention security email address', () => {
      const ptActions = FINTECHX_KNOWLEDGE.pt.phishing.actions
      const enActions = FINTECHX_KNOWLEDGE.en.phishing.actions

      expect(ptActions.join('').toLowerCase()).toContain(
        'seguranca@fintechx.com.br',
      )
      expect(enActions.join('').toLowerCase()).toContain(
        'seguranca@fintechx.com.br',
      )
    })
  })

  describe('Investment & Savings Education', () => {
    it('should provide basic investment concepts', () => {
      const ptConcepts = FINTECHX_KNOWLEDGE.pt.investments.basicConcepts
      const enConcepts = FINTECHX_KNOWLEDGE.en.investments.basicConcepts

      expect(ptConcepts.length).toBeGreaterThan(0)
      expect(enConcepts.length).toBeGreaterThan(0)
    })

    it('should mention diversification', () => {
      const ptConcepts = FINTECHX_KNOWLEDGE.pt.investments.basicConcepts
      const enConcepts = FINTECHX_KNOWLEDGE.en.investments.basicConcepts

      expect(
        ptConcepts.some((item) => item.toLowerCase().includes('diversif')),
      ).toBe(true)
      expect(
        enConcepts.some((item) => item.toLowerCase().includes('diversif')),
      ).toBe(true)
    })

    it('should provide investment products information', () => {
      const ptProducts = FINTECHX_KNOWLEDGE.pt.investments.products
      const enProducts = FINTECHX_KNOWLEDGE.en.investments.products

      expect(ptProducts.length).toBeGreaterThan(0)
      expect(enProducts.length).toBeGreaterThan(0)

      const ptProductsText = ptProducts.join('').toUpperCase()
      const enProductsText = enProducts.join('').toUpperCase()

      expect(ptProductsText).toContain('RENDA FIXA')
      expect(ptProductsText).toContain('RENDA VARIÁVEL')
      expect(enProductsText).toContain('FIXED INCOME')
      expect(enProductsText).toContain('VARIABLE INCOME')
    })

    it('should provide educational resources', () => {
      const ptResources = FINTECHX_KNOWLEDGE.pt.investments.resources
      const enResources = FINTECHX_KNOWLEDGE.en.investments.resources

      expect(ptResources.length).toBeGreaterThan(0)
      expect(enResources.length).toBeGreaterThan(0)

      const ptResourcesText = ptResources.join('').toLowerCase()
      const enResourcesText = enResources.join('').toLowerCase()

      expect(ptResourcesText).toContain('educativa')
      expect(enResourcesText).toContain('educational')
    })
  })

  describe('Promotions & Discounts', () => {
    it('should provide signup instructions', () => {
      const ptSignup = FINTECHX_KNOWLEDGE.pt.promotions.signUp
      const enSignup = FINTECHX_KNOWLEDGE.en.promotions.signUp

      expect(ptSignup.length).toBeGreaterThan(0)
      expect(enSignup.length).toBeGreaterThan(0)
    })

    it('should list promotion benefits', () => {
      const ptBenefits = FINTECHX_KNOWLEDGE.pt.promotions.benefits
      const enBenefits = FINTECHX_KNOWLEDGE.en.promotions.benefits

      expect(ptBenefits.length).toBeGreaterThan(0)
      expect(enBenefits.length).toBeGreaterThan(0)

      const ptBenefitsText = ptBenefits.join('').toUpperCase()
      const enBenefitsText = enBenefits.join('').toUpperCase()

      expect(ptBenefitsText).toContain('CASHBACK')
      expect(enBenefitsText).toContain('CASHBACK')
    })

    it('should provide unsubscribe information', () => {
      expect(FINTECHX_KNOWLEDGE.pt.promotions.unsubscribe).toBeDefined()
      expect(FINTECHX_KNOWLEDGE.en.promotions.unsubscribe).toBeDefined()
    })
  })

  describe('General Support Information', () => {
    it('should provide customer service contact', () => {
      const ptService = FINTECHX_KNOWLEDGE.pt.general.customerService
      const enService = FINTECHX_KNOWLEDGE.en.general.customerService

      expect(ptService).toContain('suporte@fintechx.com.br')
      expect(enService).toContain('suporte@fintechx.com.br')
    })

    it('should mention 24/7 chat support', () => {
      const ptService = FINTECHX_KNOWLEDGE.pt.general.customerService
      const enService = FINTECHX_KNOWLEDGE.en.general.customerService

      expect(ptService).toContain('24/7')
      expect(enService).toContain('24/7')
    })

    it('should list supported languages', () => {
      const ptLangs = FINTECHX_KNOWLEDGE.pt.general.languages
      const enLangs = FINTECHX_KNOWLEDGE.en.general.languages

      expect(ptLangs).toContain('português')
      expect(ptLangs).toContain('inglês')
      expect(ptLangs).toContain('espanhol')

      expect(enLangs).toContain('Portuguese')
      expect(enLangs).toContain('English')
      expect(enLangs).toContain('Spanish')
    })
  })

  describe('FAQ Questions', () => {
    it('should have 7 Portuguese FAQ questions', () => {
      expect(FINTECHX_FAQS.pt.length).toBe(7)
    })

    it('should have 7 English FAQ questions', () => {
      expect(FINTECHX_FAQS.en.length).toBe(7)
    })

    it('should cover all required topics in Portuguese', () => {
      const categories = FINTECHX_FAQS.pt.map((faq) => faq.category)

      expect(categories).toContain('operatingHours')
      expect(categories).toContain('officeLocations')
      expect(categories).toContain('company')
      expect(categories).toContain('security')
      expect(categories).toContain('phishing')
      expect(categories).toContain('investments')
      expect(categories).toContain('promotions')
    })

    it('should cover all required topics in English', () => {
      const categories = FINTECHX_FAQS.en.map((faq) => faq.category)

      expect(categories).toContain('operatingHours')
      expect(categories).toContain('officeLocations')
      expect(categories).toContain('company')
      expect(categories).toContain('security')
      expect(categories).toContain('phishing')
      expect(categories).toContain('investments')
      expect(categories).toContain('promotions')
    })

    it('should have keywords for each FAQ question', () => {
      FINTECHX_FAQS.pt.forEach((faq) => {
        expect(faq.keywords).toBeDefined()
        expect(faq.keywords.length).toBeGreaterThan(0)
      })

      FINTECHX_FAQS.en.forEach((faq) => {
        expect(faq.keywords).toBeDefined()
        expect(faq.keywords.length).toBeGreaterThan(0)
      })
    })
  })

  describe('System Prompt Building', () => {
    it('should build Portuguese system prompt with FinTechX context', () => {
      const prompt = buildFintechxContext('pt')

      expect(prompt).toBeDefined()
      expect(prompt.length).toBeGreaterThan(0)
      expect(prompt).toContain('FinTechX')
      expect(prompt).toContain('São Paulo')
      expect(prompt.toLowerCase()).toContain('português')
    })

    it('should build English system prompt with FinTechX context', () => {
      const prompt = buildFintechxContext('en')

      expect(prompt).toBeDefined()
      expect(prompt.length).toBeGreaterThan(0)
      expect(prompt).toContain('FinTechX')
      expect(prompt).toContain('São Paulo')
      expect(prompt.toLowerCase()).toContain('english')
    })

    it('should include company context in system prompt', () => {
      const ptPrompt = buildFintechxContext('pt')
      const enPrompt = buildFintechxContext('en')

      expect(ptPrompt).toContain('Operating Hours')
      expect(ptPrompt).toContain('Office Locations')
      expect(ptPrompt).toContain('Security')

      expect(enPrompt).toContain('Operating Hours')
      expect(enPrompt).toContain('Office Locations')
      expect(enPrompt).toContain('Security')
    })

    it('should mention business hours in the prompt', () => {
      const ptPrompt = buildFintechxContext('pt')
      const enPrompt = buildFintechxContext('en')

      expect(ptPrompt).toContain('08:00')
      expect(enPrompt).toContain('08:00')
    })

    it('should include security guidelines in the prompt', () => {
      const ptPrompt = buildFintechxContext('pt')
      const enPrompt = buildFintechxContext('en')

      expect(ptPrompt).toContain('seguranca@fintechx.com.br')
      expect(enPrompt).toContain('seguranca@fintechx.com.br')
    })

    it('should mention customer service contact in the prompt', () => {
      const ptPrompt = buildFintechxContext('pt')
      const enPrompt = buildFintechxContext('en')

      expect(ptPrompt).toContain('suporte@fintechx.com.br')
      expect(enPrompt).toContain('suporte@fintechx.com.br')
    })
  })

  describe('Prompt Token Count Safety', () => {
    it('should build system prompt under practical token limits', () => {
      const ptPrompt = buildFintechxContext('pt')
      const enPrompt = buildFintechxContext('en')

      // Rough estimation: ~1 token per 4 characters
      const ptTokens = Math.ceil(ptPrompt.length / 4)
      const enTokens = Math.ceil(enPrompt.length / 4)

      // System prompt + user message should not exceed ~2000 tokens total
      // Leave buffer for safety (max_tokens is 500)
      expect(ptTokens).toBeLessThan(2000)
      expect(enTokens).toBeLessThan(2000)

      console.log(`Portuguese prompt ~${ptTokens} tokens`)
      console.log(`English prompt ~${enTokens} tokens`)
    })
  })
})
